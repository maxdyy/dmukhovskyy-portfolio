'use strict';

/**
 * Blogposts.js controller
 *
 * @description: A set of functions called "actions" for managing `Blogposts`.
 */

module.exports = {

  /**
   * Retrieve blogposts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blogposts.search(ctx.query);
    } else {
      return strapi.services.blogposts.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blogposts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blogposts.fetch(ctx.params);
  },

  /**
   * Count blogposts records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blogposts.count(ctx.query);
  },

  /**
   * Create a/an blogposts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blogposts.add(ctx.request.body);
  },

  /**
   * Update a/an blogposts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blogposts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blogposts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blogposts.remove(ctx.params);
  }
};
