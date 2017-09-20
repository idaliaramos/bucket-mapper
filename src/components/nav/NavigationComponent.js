import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default function NavigationComponent() {
  return (
    <AppBar
      title="Destinations Board"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  );
}