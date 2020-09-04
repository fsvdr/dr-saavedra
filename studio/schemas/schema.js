import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import inlinePostImage from './inline-post-image';
import blogPost from './blog-post';
import testimonial from './testimonial';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([inlinePostImage, blogPost, testimonial]),
});
