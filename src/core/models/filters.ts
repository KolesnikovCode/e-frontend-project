export enum EGenders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  ANY = "ANY"
}

export enum ECategory {
  // ANY
  ANY = 'ANY',
  // Штаны
  PANTS = 'PANTS',

  // Пиджак
  JACKET = 'JACKET',

  // Футболка
  T_SHIRT = 'T_SHIRT',

  // Рубашка
  SHIRT = 'SHIRT',

  // Джинсы
  JEANS = 'JEANS',

  // Пальто
  COAT = 'COAT',

  // Куртка
  WARM_JACKET = 'WARM_JACKET',

  // Свитер
  SWEATER = 'SWEATER',

  // Худи
  HOODIE = 'HOODIE',

  // Свитшот
  SWEATSHOT = 'SWEATSHOT',

  // Ботинки
  BOOTS = 'BOOTS',

  // Кроссовки
  SNEAKERS = 'SNEAKERS',

  // Аксессуар-верх
  ACCESSORY_TOP = 'ACCESSORY_TOP',

  // Аксессуар-низ
  ACCESSORY_BOTTOM = 'ACCESSORY_BOTTOM',
}

export enum EConstitution {
  SLIM = 'SLIM',
  AVERAGE = 'AVERAGE',
  LARGE = 'LARGE',
  ANY = 'ANY'
}

export enum EEvent {
  PARTY = 'PARTY',
  WORK = 'WORK',
  EVERYDAY = 'EVERYDAY',
  ANY = 'ANY'
}

export enum ETone {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  BRIGHT = 'BRIGHT',
  ANY = 'ANY'
}

export enum EPrice {
  ECONOM = 'ECONOM',
  STANDARD = 'STANDARD',
  LUXE = 'LUXE',
  ANY = 'ANY'
}

export type TFilters = {
  gender: string;
  constitution: string;
  event: string;
  tone: string;
  priceCategory: string;
}
