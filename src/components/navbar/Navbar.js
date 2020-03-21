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
          Main page
        </SideNavLink>
        <SideNavLink href="/articles/list">
          Articles
        </SideNavLink>
        <SideNavLink href="/authors/list">
          Authors
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
}

export default Navbar;