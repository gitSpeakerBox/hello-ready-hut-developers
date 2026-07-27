

interface Data {
  name: string;
  position: string;
  slug: string,
  image: string;
  buttonsCollection: {
    title: string;
    link: any;
    links?: { label: string; url: string; }[];
    icon: string;
  }[];
  cardsCollection: {
    title: string;
    link: any;
    links?: { label: string; url: string; }[];
    icon: string;
  }[];
}
