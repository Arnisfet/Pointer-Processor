#!/bin/sh
BASEDIR=$(dirname $0)
export HADOOP_CONF_DIR=/etc/hadoop/conf


spark2-submit --class ai.hybrid.places.GetVisitorPlacesHdfsUseHash \
--master yarn-cluster \
--num-executors 4 \
--driver-memory 1g \
--executor-memory 8g \
--executor-cores 4 \
--queue high_priority \
--jars hdfs:/tmp/places-big.jar,hdfs:/tmp/postgresql-42.0.0.jar \
--conf "spark.executor.extraJavaOptions=
-Djava.library.path=/opt/cloudera/parcels/CDH/lib/hadoop/lib/native
-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions
-XX:G1MaxNewSizePercent=50 -XX:InitiatingHeapOccupancyPercent=60
-XX:G1MixedGCLiveThresholdPercent=80" \
--conf "spark.dynamicAllocation.enabled=false" \
--conf "spark.driver.extraJavaOptions=-Dlog4j.configuration=log4j.properties" \
--conf "spark.executor.extraJavaOptions=-Dlog4j.debug=true" \
--conf "spark.executor.extraJavaOptions=-Dlog4j.configuration=log4j.properties" \
--conf "spark.executor.extraJavaOptions=-Dlog4j.configuration=file:./log4j.properties" \
--conf "spark.ui.showConsoleProgress=false" \
--files "./log4j.properties" "./ccords.txt" \
$BASEDIR/places.jar -i ccords.txt -r 500 -s 2024-07-01 -f 2024-07-30 -bi -sm "$@"
