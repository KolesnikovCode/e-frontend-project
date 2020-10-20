export enum EGenders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  ANY = "ANY"
}

export enum ECategory {
  PANTS = 'PANTS',
  JACKET = 'JACKET',
  T_SHIRT = 'T_SHIRT'
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
