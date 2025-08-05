#!/usr/bin/env node

/**
 * Script to get pipeline information from GoHighLevel
 * This will help us identify the pipeline and stage IDs
 */

const GHL_ACCESS_TOKEN = 'pit-8f017e02-dd2d-4360-81d3-89f18aec470c';
const GHL_LOCATION_ID = 'GVFoSfHpPaXzRXCJbym0';

async function getPipelines() {
  console.log('========================================');
  console.log('Fetching GoHighLevel Pipelines');
  console.log('========================================\n');
  
  try {
    const response = await fetch(
      `https://services.leadconnectorhq.com/opportunities/pipelines?locationId=${GHL_LOCATION_ID}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${GHL_ACCESS_TOKEN}`,
          'Version': '2021-07-28',
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Error fetching pipelines:', response.status, error);
      return;
    }

    const data = await response.json();
    
    console.log('Found', data.pipelines?.length || 0, 'pipelines:\n');
    
    data.pipelines?.forEach((pipeline, index) => {
      console.log(`Pipeline ${index + 1}:`);
      console.log('  Name:', pipeline.name);
      console.log('  ID:', pipeline.id);
      console.log('  Location ID:', pipeline.locationId);
      console.log('  Show in Funnel:', pipeline.showInFunnel);
      console.log('  Show in Pie Chart:', pipeline.showInPieChart);
      
      if (pipeline.stages && pipeline.stages.length > 0) {
        console.log('  Stages:');
        pipeline.stages.forEach((stage, stageIndex) => {
          console.log(`    Stage ${stageIndex + 1}:`);
          console.log('      Name:', stage.name || 'Unnamed');
          console.log('      ID:', stage.id);
          console.log('      Position:', stage.position);
        });
      }
      
      // Check if this is the TrueFlow pipeline
      if (pipeline.name && pipeline.name.includes('TrueFlow')) {
        console.log('\n  ⭐ This appears to be the TrueFlow pipeline!');
        if (pipeline.stages && pipeline.stages.length > 0) {
          const firstStage = pipeline.stages[0];
          console.log('  First stage ID:', firstStage.id);
          console.log('  First stage name:', firstStage.name);
          
          console.log('\n📋 Configuration for API:');
          console.log('  Pipeline ID:', pipeline.id);
          console.log('  First Stage ID:', firstStage.id);
        }
      }
      console.log('---');
    });
    
  } catch (error) {
    console.error('Failed to fetch pipelines:', error.message);
  }
}

// Run the script
getPipelines().then(() => {
  console.log('\n========================================');
  console.log('Pipeline fetch completed');
  console.log('========================================');
});