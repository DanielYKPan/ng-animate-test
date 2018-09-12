/**
 * animations
 */

import { animate, animateChild, AnimationTriggerMetadata, group, query, state, style, transition, trigger } from '@angular/animations';

const animationTimingMeta = '500ms';
const layerMargin = 80;

export const animations: {
    readonly layerRightSlide: AnimationTriggerMetadata;
    readonly layerRightMove: AnimationTriggerMetadata;
} = {
    layerRightSlide:
        trigger('layerRightSlide', [
            transition(':enter', [
                query('.app-overlay-backdrop', style({opacity: 0})),
                group([
                    query('.app-overlay-backdrop', animate(animationTimingMeta, style('*'))),
                    query('@layerRightMove', animateChild()),
                ])
            ]),
            transition(':leave', [
                group([
                    query('@layerRightMove', animateChild()),
                    query('.app-overlay-backdrop', animate(animationTimingMeta, style({opacity: 0}))),
                ])
            ])
        ]),

    layerRightMove:
        trigger('layerRightMove', [
            state('0', style({transform: 'translateX(0)'})),
            state('1', style({transform: 'translateX(' + layerMargin * -1 + 'px)'})),
            state('2', style({transform: 'translateX(' + layerMargin * -2 + 'px)'})),
            transition('0 <=> 1, 1 <=> 2', animate(animationTimingMeta)),
            transition(':enter', [
                style({transform: 'translateX(100%)'}),
                animate(animationTimingMeta, style('*')),
            ]),
            transition(':leave', [
                animate(animationTimingMeta, style({transform: 'translateX(100%)'})),
            ]),
        ])
};
