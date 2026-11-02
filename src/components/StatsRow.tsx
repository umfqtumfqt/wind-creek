import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import StatCard, { type StatItem } from './StatCard';

type Props = {
  /** ONE icon for the whole row — pills differ by colour and value only. */
  Icon: LucideIcon;
  items: StatItem[];
};

/** A lone pill looks like a broken skeleton — render nothing under 2 items. */
function StatsRow({ Icon, items }: Props) {
  const visible = items.filter(i => i.value.length > 0);
  if (visible.length < 2) {
    return null;
  }
  return (
    <View style={styles.row}>
      {visible.map(item => (
        <View key={item.key} style={styles.slot}>
          <StatCard Icon={Icon} {...item} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, alignItems: 'stretch' },
  slot: { flex: 1 },
});

export default React.memo(StatsRow);
