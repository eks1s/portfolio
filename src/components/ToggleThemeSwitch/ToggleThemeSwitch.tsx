import { useState } from 'react';
import { ThemeContext, themes } from 'src/contexts/Theme/ThemeContext';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';

function ToggleThemeSwitch() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }: any) => {
        if (isChecked && theme === themes.light) setTheme(themes.dark);
        if (!isChecked && theme === themes.dark) setTheme(themes.light);
        return (
          <ToggleSwitch
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            type={ToggleSwitch.Type.Rounded}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ToggleThemeSwitch;
