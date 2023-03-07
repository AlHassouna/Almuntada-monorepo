import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

export const LangMenu: React.FC = () => {
  const { locales } = useRouter();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const intl = useIntl();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (lang: string) => {
    router.push(router.pathname, router.pathname, { locale: lang });
    handleClose();
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {intl.formatMessage({ id: 'navbar.lang' })}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {locales.map((locale) => (
          <MenuItem key={locale} onClick={() => handleLangChange(locale)}>
            {locale}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
