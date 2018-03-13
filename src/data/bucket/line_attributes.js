// @flow
import { createLayout } from '../../util/struct_array';

export const lineLayoutAttributes = createLayout([
    {name: 'a_pos_normal', components: 4, type: 'Int16'},
    {name: 'a_data', components: 4, type: 'Uint8'}
], 4);

// these attributes are only needed if using data-driven line-pattern
export const linePatternAttributes = createLayout([
    // [tl.x, tl.y, br.x, br.y]
    {name: 'a_pattern_min', components: 4, type: 'Float32'},
    {name: 'a_pattern_mid', components: 4, type: 'Float32'},
    {name: 'a_pattern_max', components: 4, type: 'Float32'}
]);

export default lineLayoutAttributes;
export const {members, size, alignment} = lineLayoutAttributes;
