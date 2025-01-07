import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { getLocale, getTranslations } from 'next-intl/server';

export async function Login() {
  const locale = await getLocale();
  
  const t = await getTranslations({
    locale,
    namespace: 'LoginForm',
  });

  return(
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">
          {t('title')}
        </CardTitle>
        <CardDescription>
          {t('description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{t('emailLabel')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">{t('passwordLabel')}</Label>
              </div>
              <Input 
                id="password"
                type="password"
                placeholder={t('passwordPlaceholder')}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t('submitButton')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}