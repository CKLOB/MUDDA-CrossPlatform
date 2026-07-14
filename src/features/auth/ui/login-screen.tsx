import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { AuthLayout, MaxContentWidth } from '@/constants/theme';

import { SocialLoginButton } from './social-login-button';

const socialProviders = [
  {
    accessibilityLabel: 'Apple로 로그인',
    icon: require('../../../../assets/images/auth/apple.png'),
    iconWidth: AuthLayout.appleIconWidth,
    label: 'Apple로 시작하기',
    provider: 'apple',
  },
  {
    accessibilityLabel: '카카오로 로그인',
    icon: require('../../../../assets/images/auth/kakao.png'),
    iconWidth: AuthLayout.kakaoIconWidth,
    label: '카카오로 시작하기',
    provider: 'kakao',
  },
  {
    accessibilityLabel: 'Google로 로그인',
    icon: require('../../../../assets/images/auth/google.png'),
    iconWidth: AuthLayout.googleIconWidth,
    label: 'Google로 시작하기',
    provider: 'google',
  },
] as const;

export function LoginScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.intro}>
            <ThemedText themeColor="brand" style={styles.logo}>
              묻다
            </ThemedText>
            <ThemedText style={styles.description}>당신의 추억을 지도 위에 남겨보세요</ThemedText>
          </View>

          <View style={styles.providers}>
            {socialProviders.map((provider) => (
              <SocialLoginButton key={provider.provider} {...provider} />
            ))}
          </View>
        </View>

        <ThemedText themeColor="authLegalText" style={styles.legal}>
          이용약관 | 개인정보처리방침
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: AuthLayout.screenHorizontal,
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: AuthLayout.providerBottom,
  },
  intro: {
    alignItems: 'center',
    paddingTop: AuthLayout.logoTop,
    gap: AuthLayout.logoToDescription,
  },
  logo: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: -2,
    lineHeight: 48,
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
  },
  providers: {
    gap: AuthLayout.providerGap,
  },
  legal: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
    marginBottom: AuthLayout.legalBottom,
  },
});
