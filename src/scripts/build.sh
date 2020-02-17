rm -r dist src/views
tsc -p .
cp -r src/template dist/src/template
cp package.json dist/package.json
echo 'Build complete'
