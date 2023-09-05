import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useRouter} from "next/router";
import {useIntl} from "react-intl";

type Anchor = 'top'

export const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const {locales} = useRouter();
  const intl = useIntl()
  const router = useRouter();
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({...state, [anchor]: open});
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {locales?.map((locale) => (
          <ListItem key={locale} disablePadding>
            <ListItemButton
              onClick={() => router.push(router.pathname, router.pathname, {locale})}
            >
              <ListItemText primary={locale === 'ar' ? 'العربية' : locale === 'en' ? "English" : "עברית"}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider/>
    </Box>
  );

  return (
    <div>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {
              intl.formatMessage({
                id: 'navbar.language',
                defaultMessage: 'Language'
              })
            }
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
  );
}
