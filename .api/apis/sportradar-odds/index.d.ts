import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Returns a list of configured bookmakers and their IDs.
     *
     * @summary Books
     */
    ocPlayerPropsBooks(metadata: types.OcPlayerPropsBooksMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsBooksResponse200>>;
    /**
     * Provides competition id mapping between global and US id types.
     *
     * @summary Competition Mappings
     */
    ocPlayerPropsCompetitionMappings(metadata: types.OcPlayerPropsCompetitionMappingsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsCompetitionMappingsResponse200>>;
    /**
     * Provides scheduling info for all events with props available in a given competition.
     *
     * @summary Competition Schedules
     */
    ocPlayerPropsCompetitionSchedules(metadata: types.OcPlayerPropsCompetitionSchedulesMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsCompetitionSchedulesResponse200>>;
    /**
     * Provides competition id mapping between global and US id types.
     *
     * @summary Competitor Mappings
     */
    ocPlayerPropsCompetitorMappings(metadata: types.OcPlayerPropsCompetitorMappingsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsCompetitorMappingsResponse200>>;
    /**
     * Provides scheduling info for all events with props available for a given sport and date.
     *
     * @summary Daily Schedules
     */
    ocPlayerPropsDailySchedules(metadata: types.OcPlayerPropsDailySchedulesMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsDailySchedulesResponse200>>;
    /**
     * Provides player id mapping between global and US id types.
     *
     * @summary Player Mappings
     */
    ocPlayerPropsPlayerMappings(metadata: types.OcPlayerPropsPlayerMappingsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsPlayerMappingsResponse200>>;
    /**
     * Returns a list of the latest odds changes.
     *
     * @summary Player Props Change Log
     */
    ocPlayerPropsChangeLogEndpoint(metadata: types.OcPlayerPropsChangeLogEndpointMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsChangeLogEndpointResponse200>>;
    /**
     * Returns a list of categories for a sport ID that have odds available.
     *
     * @summary Sport Categories
     */
    ocPlayerPropsSportCategories(metadata: types.OcPlayerPropsSportCategoriesMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsSportCategoriesResponse200>>;
    /**
     * Returns a list of competitions for a sport ID that have odds available.
     *
     * @summary Sport Competitions
     */
    ocPlayerPropsSportCompetitions(metadata: types.OcPlayerPropsSportCompetitionsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsSportCompetitionsResponse200>>;
    /**
     * Provides sport event id mapping between global and US id types.
     *
     * @summary Sport Event Mappings
     */
    ocPlayerPropsSportEventMappings(metadata: types.OcPlayerPropsSportEventMappingsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsSportEventMappingsResponse200>>;
    /**
     * Returns a list of player props for a given sport event ID.
     *
     * @summary Sport Event Player Props
     */
    ocPlayerPropsSportEventPlayerProps(metadata: types.OcPlayerPropsSportEventPlayerPropsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsSportEventPlayerPropsResponse200>>;
    /**
     * Returns a list of stages and categories for a sport ID that have odds available.
     *
     * @summary Sport Stages
     */
    ocPlayerPropsSportStages(metadata: types.OcPlayerPropsSportStagesMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsSportStagesResponse200>>;
    /**
     * Returns a list of sports and sport IDs.
     *
     * @summary Sports
     */
    ocPlayerPropsSports(metadata: types.OcPlayerPropsSportsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsSportsResponse200>>;
    /**
     * Provides stage id mapping between global and US id types.
     *
     * @summary Stage Mappings
     */
    ocPlayerPropsStageMappings(metadata: types.OcPlayerPropsStageMappingsMetadataParam): Promise<FetchResponse<200, types.OcPlayerPropsStageMappingsResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
