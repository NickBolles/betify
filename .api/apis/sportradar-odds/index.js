import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'sportradar-odds/unknown (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Returns a list of configured bookmakers and their IDs.
     *
     * @summary Books
     */
    ocPlayerPropsBooks(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/books.{format}', 'get', metadata);
    }
    /**
     * Provides competition id mapping between global and US id types.
     *
     * @summary Competition Mappings
     */
    ocPlayerPropsCompetitionMappings(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/competitions/mappings.{format}', 'get', metadata);
    }
    /**
     * Provides scheduling info for all events with props available in a given competition.
     *
     * @summary Competition Schedules
     */
    ocPlayerPropsCompetitionSchedules(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/competitions/{competition_id}/schedules.{format}', 'get', metadata);
    }
    /**
     * Provides competition id mapping between global and US id types.
     *
     * @summary Competitor Mappings
     */
    ocPlayerPropsCompetitorMappings(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/competitors/mappings.{format}', 'get', metadata);
    }
    /**
     * Provides scheduling info for all events with props available for a given sport and date.
     *
     * @summary Daily Schedules
     */
    ocPlayerPropsDailySchedules(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sports/{sport_id}/schedules/{date}/schedules.{format}', 'get', metadata);
    }
    /**
     * Provides player id mapping between global and US id types.
     *
     * @summary Player Mappings
     */
    ocPlayerPropsPlayerMappings(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/players/mappings.{format}', 'get', metadata);
    }
    /**
     * Returns a list of the latest odds changes.
     *
     * @summary Player Props Change Log
     */
    ocPlayerPropsChangeLogEndpoint(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/players_props_changelog.{format}', 'get', metadata);
    }
    /**
     * Returns a list of categories for a sport ID that have odds available.
     *
     * @summary Sport Categories
     */
    ocPlayerPropsSportCategories(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sports/{sport_id}/categories.{format}', 'get', metadata);
    }
    /**
     * Returns a list of competitions for a sport ID that have odds available.
     *
     * @summary Sport Competitions
     */
    ocPlayerPropsSportCompetitions(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sports/{sport_id}/competitions.{format}', 'get', metadata);
    }
    /**
     * Provides sport event id mapping between global and US id types.
     *
     * @summary Sport Event Mappings
     */
    ocPlayerPropsSportEventMappings(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sport_events/mappings.{format}', 'get', metadata);
    }
    /**
     * Returns a list of player props for a given sport event ID.
     *
     * @summary Sport Event Player Props
     */
    ocPlayerPropsSportEventPlayerProps(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sport_events/{sport_event_id}/players_props.{format}', 'get', metadata);
    }
    /**
     * Returns a list of stages and categories for a sport ID that have odds available.
     *
     * @summary Sport Stages
     */
    ocPlayerPropsSportStages(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sports/{sport_id}/stages.{format}', 'get', metadata);
    }
    /**
     * Returns a list of sports and sport IDs.
     *
     * @summary Sports
     */
    ocPlayerPropsSports(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/sports.{format}', 'get', metadata);
    }
    /**
     * Provides stage id mapping between global and US id types.
     *
     * @summary Stage Mappings
     */
    ocPlayerPropsStageMappings(metadata) {
        return this.core.fetch('/{access_level}/v2/{language_code}/stages/mappings.{format}', 'get', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
