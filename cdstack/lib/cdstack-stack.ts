import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdstackStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const todoTable = new dynamodb.Table(this, 'todotable', {
      partitionKey: {name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'todotable',
    })

    
  }
}
