'use strict';

const path = require('path');
const fs = require('fs');

function searchDirectory(dir, pattern, done) {
  const results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(function(file) {
      const filePath = path.resolve(dir, file);
      fs.stat(filePath, function(err, stat) {
        if (err) return done(err);

        if (stat && stat.isDirectory()) {
          searchDirector(filePath, pattern, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.match(pattern)) {
            results.push(filePath);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

module.exports = searchDirectory;
