import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { useCryptoQuotes } from '../../hooks/useCryptoQuotes';
import styles from './styles';
import QuoteCard from '../../components/QuoteCard';
import { Quote } from '../../services/types';
import SearchModal from '../../components/SearchModal';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const AssetsListScreen = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { quotes, quotesFetchingStatus } = useCryptoQuotes();

  const filteredQuotes = useMemo(() => {
    if (quotes == null) return [];
    if (searchTerm === '') return quotes;

    const loweredTerm = searchTerm.toLowerCase();
    return quotes.filter(
      (q) =>
        q.name.toLowerCase().includes(loweredTerm)
        || q.symbol.toLowerCase().includes(loweredTerm),
    );
  }, [quotes, searchTerm]);

  const renderItem = useCallback(({ item }: { item: Quote }) => {
    return <QuoteCard quote={item} onQuoteTap={() => null} />;
  }, []);

  const renderSeparator = useCallback(() => (
    <View style={styles.separator} />
  ), []);

  if (quotesFetchingStatus === 'fetching') {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (quotesFetchingStatus === 'error') {
    return (
      <View style={styles.loadingContainer}>
        <Text>Could not fetch the quotes.</Text>
      </View>
    );
  }
  if (quotesFetchingStatus === 'done') {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Crypto Quotes</Text>
            <TouchableOpacity onPress={() => {
              if (searchTerm.length === 0) {
                setShowSearchModal(true);
              } else {
                setSearchTerm('');
              }
            }}>
              <MaterialDesignIcons
                name={searchTerm.length > 0 ? "close" : "magnify"}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredQuotes}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={styles.quotesList}
          />
        </SafeAreaView>

        {showSearchModal && (
          <SearchModal
            onClose={() => setShowSearchModal(false)}
            onConfirmSearch={(term: string) => {
              setSearchTerm(term);
              setShowSearchModal(false);
            }}
          />
        )}
      </>
    );
  }
};

export default AssetsListScreen;
