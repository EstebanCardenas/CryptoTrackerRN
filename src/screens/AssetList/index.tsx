import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCryptoQuotes } from '../../hooks/useCryptoQuotes';
import styles from './styles';
import QuoteCard from '../../components/QuoteCard';
import { Quote } from '../../services/types';

const AssetsListScreen = () => {
  const { quotes, quotesFetchingStatus } = useCryptoQuotes();

  const renderItem = useCallback(({ item }: {item: Quote}) => {
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
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Crypto Quotes</Text>
        <FlatList
          data={quotes}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.quotesList}
        />
      </SafeAreaView>
    );
  }
};

export default AssetsListScreen;
