import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AuthLayout } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type SocialLoginButtonProps = {
  accessibilityLabel: string;
  icon: number;
  iconWidth: number;
  label: string;
  provider: 'apple' | 'kakao' | 'google';
};

export function SocialLoginButton({
  accessibilityLabel,
  icon,
  iconWidth,
  label,
  provider,
}: SocialLoginButtonProps) {
  const theme = useTheme();
  const isApple = provider === 'apple';
  const isKakao = provider === 'kakao';

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isApple
            ? theme.background
            : isKakao
              ? theme.kakao
              : theme.authButtonBackground,
          borderColor: theme.authButtonBorder,
        },
        isApple && styles.outlinedButton,
        pressed && styles.pressed,
      ]}
    >
      <Image contentFit="contain" source={icon} style={[styles.icon, { width: iconWidth }]} />
      <ThemedText style={styles.label}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 100,
    flexDirection: 'row',
    height: AuthLayout.providerHeight,
    justifyContent: 'center',
    gap: AuthLayout.providerIconGap,
  },
  outlinedButton: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    height: AuthLayout.providerIconHeight,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: -0.8,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.72,
  },
});
