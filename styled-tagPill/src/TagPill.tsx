import * as React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

const StyledTagPill = styled.div(
  ({
    theme,
    primary = false,
    secondary = false,
    disabled = false,
    excluded = false,
    positive = false,
    negative = false,
    neutral = false,
  }) => {
    const backgroundColor = () => {
      if (primary) return theme.colors.primaryOrange;
      if (secondary) return theme.colors.neutralS4;
      if (disabled) return theme.colors.neutralS4;
      if (excluded) return theme.colors.warningS4;
      if (positive) return theme.colors.success;
      if (negative) return theme.colors.supporting2;
      if (neutral) return theme.colors.neutralS4;
    };

    const color = () => {
      if (primary) return theme.colors.globalWhite;
      if (secondary) return theme.colors.globalBlack;
      if (disabled) return theme.colors.globalBlack;
      if (excluded) return theme.colors.globalWhite;
      if (positive) return theme.colors.globalWhite;
      if (negative) return theme.colors.globalWhite;
      if (neutral) return theme.colors.globalBlack;
    };

    return {
      textAlign: 'center',
      margin: `${theme.space[2]} ${theme.space[2]}`,
      'font-size': theme.fontSizes[0],
      padding: `${theme.space[0]} ${theme.space[2]}`,
      maxWidth: theme.space[8],
      // minHeight: theme.space[6],
      'border-radius': theme.radii[3],
      color: color(),
      'border-width': '0px',
      'background-color': backgroundColor(),
      opacity: disabled ? 0.6 : 1,
    };
  }
);

type TagPillProps = {
  /**
   * Primary variant of TagPill.
   */
  primary?: boolean;
  /**
   * Secondary variant of TagPill.
   */
  secondary?: boolean;
  /**
   * Specifies if the TagPill is disabled.
   */
  disabled?: boolean;
  /**
   * Excluded variant of TagPill.
   */
  excluded?: boolean;
  /**
   * Positive variant of TagPill.
   */
  positive?: boolean;
  /**
   * Negative variant of TagPill.
   */
  negative?: boolean;
  /**
   * Neutral variant of TagPill.
   */
  neutral?: boolean;
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[];
};

/**
  TagPill component.
 */
export const TagPill = ({ ...otherProps }: TagPillProps) => {
  const theme = React.useContext(ThemeContext);

  const {
    primary,
    secondary,
    disabled,
    excluded,
    positive,
    negative,
    neutral,
  } = otherProps;

  return <StyledTagPill {...otherProps} />;
};
