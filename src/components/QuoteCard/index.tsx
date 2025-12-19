import { View, Text } from 'react-native';
import React, { memo } from 'react';
import styles from './styles';
import { Quote } from '../../services/types';
import { formatCurrency } from '../../utils';
import Button from '../Button';

type Props = {
  quote: Quote;
  onQuoteTap: () => void;
}

const QuoteCard: React.FC<Props> = ({ quote, onQuoteTap }) => {
  const formattedPrice = formatCurrency(quote.quote.USD.price);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{quote.symbol}</Text>
        <Text style={styles.symbolText}>{quote.name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.priceText}>{formattedPrice}</Text>
        <Button text='Buy!' onTap={onQuoteTap} />
      </View>
    </View>
  );
};

export default memo(QuoteCard);
