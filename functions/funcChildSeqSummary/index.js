// Imports the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
const functions = require("firebase-functions");

// Creates a client
const bigquery = new BigQuery();

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

exports.funcChildSeqSummary = functions.https.onCall(async(data, context) => {
  //SQL query to get number of checks for each item on checklist
  const sqlQuery = `SELECT
                    COUNT(CASE WHEN (peopleType = 1 OR peopleType = 2) AND (checklist.child1 OR checklist.child2 OR checklist.child3 OR checklist.child4) THEN 'sequential' ELSE NULL END) AS sequential,
                    COUNT(CASE WHEN (peopleType = 1 OR peopleType = 2) AND (checklist.child5) THEN 'notSequential' ELSE NULL END) AS notSequential
                    FROM cqrefpwa.observations.sequential
                    WHERE id ='`+data.sessionId+`'`;
  
    console.log(sqlQuery); 
  
    const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };
  
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);
  
  const rows = await job.getQueryResults();
  console.log(rows);
  return rows;
});