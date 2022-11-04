import React from 'react';
import { TagPill } from '../index';
import { layout } from '~/styled-utils';
export default layout;

export const primary = () => <TagPill primary>Press me</TagPill>;

export const secondary = () => <TagPill secondary>Press me</TagPill>;

export const disabled = () => <TagPill disabled>Press me</TagPill>;
