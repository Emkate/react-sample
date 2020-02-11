import React from 'react';
import { SideNav, SideNavItems, SideNavLink } from 'carbon-components-react';
import './Navbar.scss'

function Navbar() {
  return (
    <SideNav
      isChildOfHeader={false}
      isFixedNav
      isPersistent
      aria-label="hehe" 
      defaultExpanded={false}
      expanded
    >
      <SideNavItems>
        <SideNavLink href="/">
          Strona główna
        </SideNavLink>
        <SideNavLink href="/articles/list">
          Lista
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
}

export default Navbar;