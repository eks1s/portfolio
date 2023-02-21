export enum EToggleSwitchEnum {
  Square = '',
  Rounded = 'round',
  Stripped = 'strip',
}

export interface IToggleSwitchProps {
  type: EToggleSwitchEnum;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}
