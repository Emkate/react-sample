import React, {Component} from 'react';
import './Navbar.scss'
import { SideNav, SideNavItems, SideNavLink } from 'carbon-components-react';

export class Navbar extends Component {
    render() {
      return <SideNav
        isChildOfHeader={false}
        isFixedNav
        isPersistent
        aria-label="hehe"
        defaultExpanded={false}
        expanded>
        <SideNavItems>
          <SideNavLink href="/">
            Strona główna
          </SideNavLink>
          <SideNavLink href="/list">
            Lista
          </SideNavLink>
        </SideNavItems>
      </SideNav>;
    }
  }