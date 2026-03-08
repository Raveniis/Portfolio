type SocialType = 'link' | 'text';

interface Social {
  type: SocialType;
  name: string;
  icon: string;
  url?: string;
  text?: string;
}
