import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const StyledCollapsible = styled.div`
  margin-bottom: 2rem;
  border-radius: 5px;
  .collapsible-heading {
    button {
      border-radius: 5px 5px ${props => (props.collapsed ? '5px 5px' : '0 0')};
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      appearance: none;
      border: 1px solid red;
      color: #fff;
      background: transparent;
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: rgba(255, 255, 255, 0.1);
      align-items: center;
      .heading {
        font-size: 1.8rem;
      }
    }
  }
`;

const StyledCollapsibleIcon = styled.span`
  transition: 100ms ease;
  transform: ${props =>
    props.collapsed ? 'scale(1.6) translateX(-8px) rotate(0)' : 'scale(1.6) translateX(-8px) rotate(-180deg)'};
`;

const StyledCollapsibleContent = styled.div`
  display: ${props => (props.collapsed ? 'none' : 'block')};
  padding: 1.5rem;
  border-radius: 0 0 5px 5px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;

function Collapsible({ heading, children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledCollapsible collapsed={collapsed}>
      <div className="collapsible-heading">
        <button type="button" onClick={() => setCollapsed(!collapsed)}>
          <span className="heading">{heading}</span>
          <StyledCollapsibleIcon collapsed={collapsed}>
            <FaChevronDown />
          </StyledCollapsibleIcon>
        </button>
      </div>

      <StyledCollapsibleContent collapsed={collapsed}>{children}</StyledCollapsibleContent>
    </StyledCollapsible>
  );
}

export default Collapsible;
