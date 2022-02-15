#!/bin/bash
read AA
i=1
while [ $i != $AA ]
do
   touch $i.js;
   i=$(($i+1))
done

touch $i.js;

echo "檔案建立完成";