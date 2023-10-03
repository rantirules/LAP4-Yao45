import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, cleanup, render } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';

import { SavedRecipesPage } from '..';

expect.extend(matchers)
