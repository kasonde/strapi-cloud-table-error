import type { Schema, Attribute } from '@strapi/strapi';

export interface TestingThisIsAlsoALongCompo extends Schema.Component {
  collectionName: 'components_testing_this_is_also_a_long_compos';
  info: {
    displayName: 'ThisIsAlsoALongCompo';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testing.this-is-also-a-long-compo': TestingThisIsAlsoALongCompo;
    }
  }
}
