/*
 * @Author: your name
 * @Date: 2021-10-11 21:26:02
 * @LastEditTime: 2021-10-11 21:42:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DebugReact/src/react/packages/scheduler/src/SchedulerHostConfig.js
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// throw new Error('This module must be shimmed by a specific build.');

// 添加以下
export {
    unstable_flushAllWithoutAsserting,
    unstable_flushNumberOfYields,
    unstable_flushExpired,
    unstable_clearYields,
    unstable_flushUntilNextPaint,
    unstable_flushAll,
    unstable_yieldValue,
    unstable_advanceTime,
  } from './forks/SchedulerHostConfig.mock.js';
  
  export {
    requestHostCallback,
    requestHostTimeout,
    cancelHostTimeout,
    shouldYieldToHost,
    getCurrentTime,
    forceFrameRate,
    requestPaint,
} from './forks/SchedulerHostConfig.default.js';
