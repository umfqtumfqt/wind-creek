import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import StatCardwiandcvreekhm, { type StatItem } from './StatCardwiandcvreekhm';

type Props = {
  /** ONE icon for the whole row — pills differ by colour and value only. */
  Icon: LucideIcon;
  items: StatItem[];
};

/** A lone pill looks like a broken skeleton — render nothing under 2 items. */
function StawiandcvreekhmtsRow({ Icon, items }: Props) {
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21);
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia");
  const visible = items.filter(i => (void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21), void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia"), (i.value.length > 0)));
  if (visible.length < 2) {
    return null;
  }
  return (
    <View style={styles.row}>
      {visible.map(item => {
        void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21);
        void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia");
        const { key, ...rest } = item;
        return (
          <View key={key} style={styles.slotwiandcvreekhm}>
            <StatCardwiandcvreekhm Icon={Icon} {...rest} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, alignItems: 'stretch' },
  slotwiandcvreekhm: { flex: 1 },
});

export default React.memo(StawiandcvreekhmtsRow);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21);
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21);
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia");
  return nums.reduce((acc, n) => (void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21), void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(2, 21);
void wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold("stawia");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmStawiandcvreekhmtsRowObfV1Mix(a: number, b: number): number {
  const base = 18;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmStawiandcvreekhmtsRowObfV1Fold(text: string): number {
  let acc = 18;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
