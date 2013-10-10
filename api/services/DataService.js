/**
 * /api/services/DataService.js
 *
 * Generic data service, which is used to fetch generic data and call defined callback
 * after data fetching.
 */

/**
 * Service to fetch single project data from database.
 *
 * @param   {Number}    projectId   Project id
 * @param   {Function}  callback    Callback function to call after query
 */
exports.getProject = function(projectId, callback) {
    Project
        .findOne(projectId)
        .done(function(error, project) {
            if (error) {
                callback(error, null);
            } else if (!project) {
                var err = new Error("Project not found.");

                err.status = 404;

                callback(err, null);
            } else {
                callback(null, project);
            }
        });
};

/**
 * Service to fetch milestone data from database.
 *
 * @param   {{}}        where       Used query conditions
 * @param   {Function}  callback    Callback function to call after query
 */
exports.getMilestones = function(where, callback) {
    Milestone
        .find()
        .where(where)
        .sort("deadline ASC")
        .sort("title ASC")
        .done(function(error, milestones) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, milestones);
            }
        });
};

/**
 * Service to fetch sprint data from database.
 *
 * @param   {{}}        where       Used query conditions
 * @param   {Function}  callback    Callback function to call after query
 */
exports.getSprints = function(where, callback) {
    Sprint
        .find()
        .where(where)
        .sort("dateStart ASC")
        .done(function(error, sprints) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, sprints);
            }
        });
};

/**
 * Service to fetch story data from database.
 *
 * @param   {{}}        where       Used query conditions
 * @param   {Function}  callback    Callback function to call after query
 */
exports.getStories = function(where, callback) {
    Story
        .find()
        .where(where)
        .sort("priority ASC")
        .sort("title ASC")
        .done(function(error, stories) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, stories);
            }
        });
};

/**
 * Service to fetch user data from database.
 *
 * @param   {{}}        where       Used query conditions
 * @param   {Function}  callback    Callback function to call after query
 */
exports.getUsers = function(where, callback) {
    User
        .find()
        .where(where)
        .sort("lastName ASC")
        .done(function(error, users) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, users);
            }
        });
};