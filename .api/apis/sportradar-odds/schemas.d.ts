declare const OcPlayerPropsBooks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly books: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:31:12.002Z"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsChangeLogEndpoint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly changes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly player_props_odds_change: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:35:14.268Z"];
                };
                readonly status: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly to: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsCompetitionMappings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:31:30.714Z"];
                };
                readonly mappings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsCompetitionSchedules: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly competition_id: {
                    readonly type: "string";
                    readonly default: "sr:competition:109";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of a given competition";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "competition_id", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to start the list of results from. Example: start=0";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to limit the number of results. Minimum and maximum value is 1. Example: limit=1";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:32:08.002Z"];
                };
                readonly schedules: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly sport_event: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly competitors: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly abbreviation: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly age_group: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["U23"];
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly country_code: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly gender: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly qualifier: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["home"];
                                                };
                                                readonly rotation_number: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                                readonly virtual: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [true];
                                                };
                                            };
                                        };
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly replaced_by: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly resume_time: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-05-11T14:32:08.002Z"];
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-05-11T14:32:08.002Z"];
                                    };
                                    readonly start_time_confirmed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsCompetitorMappings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:32:32.669Z"];
                };
                readonly mappings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsDailySchedules: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly sport_id: {
                    readonly type: "string";
                    readonly default: "sr:sport:2";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of a given competition";
                };
                readonly date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Date in YYYY-MM-DD";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "sport_id", "date", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to start the list of results from. Example: start=1";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to limit the number of results. Minimum and maximum value is 1. Example: limit=1";
                };
                readonly live: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Boolean value to return live/non-live markets<br><br>Example: <code>live=true</code> or <code>live=false</code>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:33:35.340Z"];
                };
                readonly schedules: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly sport_event: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly competitors: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly abbreviation: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly age_group: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["U23"];
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly country_code: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly gender: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly qualifier: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["home"];
                                                };
                                                readonly rotation_number: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                                readonly virtual: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [true];
                                                };
                                            };
                                        };
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly replaced_by: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly resume_time: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-05-11T14:33:35.340Z"];
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-05-11T14:33:35.340Z"];
                                    };
                                    readonly start_time_confirmed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsPlayerMappings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to start the list of results from. Example: start=0";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to limit the number of results. Minimum value is 1, maximum value is 1000. Example: limit=1000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:34:52.323Z"];
                };
                readonly mappings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsSportCategories: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly sport_id: {
                    readonly type: "string";
                    readonly default: "sr:sport:2";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of a given sport";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "sport_id", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly categories: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly country_code: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:36:10.024Z"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsSportCompetitions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly sport_id: {
                    readonly type: "string";
                    readonly default: "sr:sport:2";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of a given sport";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "sport_id", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly competitions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly category: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly country_code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                };
                            };
                            readonly futures: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly gender: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly markets: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly player_props: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                        };
                    };
                };
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:36:10.027Z"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsSportEventMappings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to start the list of results from. Example: start=0";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to limit the number of results. Minimum value is 1, maximum value is 1000. Example: limit=1000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:36:49.751Z"];
                };
                readonly mappings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsSportEventPlayerProps: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly sport_event_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of a given sport event";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "sport_event_id", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly live: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Boolean value to return live/non-live markets<br><br>Example: <code>live=true</code> or <code>live=false</code>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:37:15.809Z"];
                };
                readonly sport_event_players_props: {
                    readonly type: "object";
                    readonly properties: {
                        readonly players_markets: {
                            readonly type: "object";
                            readonly properties: {
                                readonly markets: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly books: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly external_market_id: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["string"];
                                                        };
                                                        readonly external_sport_event_id: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["string"];
                                                        };
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["string"];
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["string"];
                                                        };
                                                        readonly outcomes: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly external_outcome_id: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly field_id: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly handicap: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly id: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly odds_american: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly odds_decimal: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly odds_fraction: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly open_handicap: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly open_odds_american: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly open_odds_decimal: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly open_odds_fraction: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly open_total: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly player_id: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly player_name: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly removed: {
                                                                        readonly type: "boolean";
                                                                        readonly default: true;
                                                                        readonly examples: readonly [true];
                                                                    };
                                                                    readonly total: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                    readonly trend: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["up"];
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly examples: readonly ["string"];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        readonly removed: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly examples: readonly [true];
                                                        };
                                                    };
                                                };
                                            };
                                            readonly id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly is_live: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly players_props: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly markets: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly books: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly external_market_id: {
                                                                readonly type: "string";
                                                                readonly examples: readonly ["string"];
                                                            };
                                                            readonly external_sport_event_id: {
                                                                readonly type: "string";
                                                                readonly examples: readonly ["string"];
                                                            };
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly examples: readonly ["string"];
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly examples: readonly ["string"];
                                                            };
                                                            readonly outcomes: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly external_outcome_id: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly field_id: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly handicap: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly id: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly odds_american: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly odds_decimal: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly odds_fraction: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly open_handicap: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly open_odds_american: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly open_odds_decimal: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly open_odds_fraction: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly open_total: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly player_id: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly player_name: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly removed: {
                                                                            readonly type: "boolean";
                                                                            readonly default: true;
                                                                            readonly examples: readonly [true];
                                                                        };
                                                                        readonly total: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                        readonly trend: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["up"];
                                                                        };
                                                                        readonly type: {
                                                                            readonly type: "string";
                                                                            readonly examples: readonly ["string"];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                            readonly removed: {
                                                                readonly type: "boolean";
                                                                readonly default: true;
                                                                readonly examples: readonly [true];
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                                readonly is_live: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [true];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                            };
                                        };
                                    };
                                    readonly player: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly competitor_id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly sport_event: {
                            readonly type: "object";
                            readonly properties: {
                                readonly competitors: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly abbreviation: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly age_group: {
                                                readonly type: "string";
                                                readonly examples: readonly ["U23"];
                                            };
                                            readonly country: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly country_code: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly gender: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly qualifier: {
                                                readonly type: "string";
                                                readonly examples: readonly ["home"];
                                            };
                                            readonly rotation_number: {
                                                readonly type: "integer";
                                                readonly default: 0;
                                                readonly examples: readonly [0];
                                            };
                                            readonly virtual: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                        };
                                    };
                                };
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly replaced_by: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly resume_time: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-05-11T14:37:15.809Z"];
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-05-11T14:37:15.809Z"];
                                };
                                readonly start_time_confirmed: {
                                    readonly type: "boolean";
                                    readonly default: true;
                                    readonly examples: readonly [true];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsSportStages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly sport_id: {
                    readonly type: "string";
                    readonly default: "sr:sport:2";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of a given sport";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "sport_id", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:37:37.446Z"];
                };
                readonly stages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly category: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly country_code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                };
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly scheduled: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-11T14:37:37.446Z"];
                            };
                            readonly scheduled_end: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-11T14:37:37.446Z"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsSports: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:37:53.374Z"];
                };
                readonly sports: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["stage"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const OcPlayerPropsStageMappings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly access_level: {
                    readonly type: "string";
                    readonly enum: readonly ["trial", "production"];
                    readonly default: "trial";
                    readonly description: "The access level of your API key";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly language_code: {
                    readonly type: "string";
                    readonly default: "en";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "2 letter code for supported languages<br><br>`en` (English) is the only fully supported language for this API. Click **[here](https://api-docs.sportradar.us/misc/Sportradar_API_Languages.xlsx)** for a tabular list of available languages per competition.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json", "xml"];
                    readonly default: "json";
                    readonly description: "Format returned";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["access_level", "language_code", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to start the list of results from. Example: start=0";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number to limit the number of results. Minimum value is 1, maximum value is 1000. Example: limit=1000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly generated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-11T14:38:09.058Z"];
                };
                readonly mappings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { OcPlayerPropsBooks, OcPlayerPropsChangeLogEndpoint, OcPlayerPropsCompetitionMappings, OcPlayerPropsCompetitionSchedules, OcPlayerPropsCompetitorMappings, OcPlayerPropsDailySchedules, OcPlayerPropsPlayerMappings, OcPlayerPropsSportCategories, OcPlayerPropsSportCompetitions, OcPlayerPropsSportEventMappings, OcPlayerPropsSportEventPlayerProps, OcPlayerPropsSportStages, OcPlayerPropsSports, OcPlayerPropsStageMappings };
