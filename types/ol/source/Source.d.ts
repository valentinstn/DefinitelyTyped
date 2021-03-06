import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import BaseObject, { ObjectEvent } from '../Object';
import { FrameState } from '../PluggableMap';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import State from './State';

export type Attribution = (p0: FrameState) => string | string[];
export type AttributionLike = string | string[] | Attribution;
export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection?: ProjectionLike;
    state?: State;
    wrapX?: boolean;
}
export default abstract class Source extends BaseObject {
    constructor(options: Options);
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getContextOptions(): any;
    getProjection(): Projection;
    abstract getResolutions(): number[];
    getState(): State;
    getWrapX(): boolean;
    refresh(): void;
    setAttributions(attributions: AttributionLike | undefined): void;
    setState(state: State): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
