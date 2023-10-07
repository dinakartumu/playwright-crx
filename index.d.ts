/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Crx } from './src/types/types';
export type { Crx, CrxApplication, CrxRecorder } from './src/types/types';
export type { Page, Frame, BrowserContext, Worker, JSHandle, ElementHandle, Locator, BrowserType, CDPSession, Accessibility, ElectronApplication, Android, AndroidDevice, AndroidInput, AndroidSocket, AndroidWebView, APIRequest, APIRequestContext, APIResponse, Browser, BrowserServer, ConsoleMessage, Coverage, Dialog, Download, Electron, FileChooser, FrameLocator, Keyboard, Logger, Mouse, Request, Response, Route, Selectors, Touchscreen, Tracing, Video, WebError, WebSocket, BrowserContextOptions, ViewportSize, HTTPCredentials, Geolocation, LaunchOptions, ConnectOverCDPOptions, ConnectOptions, LocatorScreenshotOptions, Cookie, PageScreenshotOptions, ChromiumBrowserContext, ChromiumBrowser, FirefoxBrowser, WebKitBrowser, ChromiumCoverage } from './playwright/packages/playwright-core/types/types';
export type { expect, test } from './playwright/packages/playwright/types/test';

export const crx: Crx;

export function _setUnderTest(): void;