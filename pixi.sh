FROM_DIR=`dirname $0`
TO_DIR=`pwd`

cp -r $FROM_DIR/src $TO_DIR
cp -r $FROM_DIR/.src $TO_DIR
cp -r $FROM_DIR/www $TO_DIR

cp $FROM_DIR/.gitignore $TO_DIR
cp $FROM_DIR/gulpfile.js $TO_DIR
cp $FROM_DIR/package.json $TO_DIR
cp $FROM_DIR/tsconfig.json $TO_DIR
cp $FROM_DIR/webpack.config.js $TO_DIR
echo 'files copied'
npm install