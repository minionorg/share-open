#!/usr/bin/env bash

# 整理 package.json 的信息
node ./optimize-package.js

# https://registry.npmjs.org/
npm publish --access=public --registry=http://localhost:4873/

# 等待操作完成
wait
# 打印输出
echo "发布完成"

exit 0