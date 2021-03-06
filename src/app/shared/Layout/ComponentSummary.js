import styles from './ComponentSummary.css';
import table from '../styles/table.css';

import React, { Component } from 'react';

export default class ComponentSummary extends Component {

  render() {
    return (
      <div className={styles.root}>

      	<h2>{ this.props.summary.title }</h2>

      	<p>{ this.props.summary.description }</p>

        <div  className={styles.file}>
          <div className={styles.fileName}>Mark up</div>
          <pre className={styles.pre}>

            { this.props.children.props.summary.markup }

          </pre>

        </div>

        <div className={styles.output}>
          <div className={styles.fileName}>Output</div>
          <div className={styles.outputContent}>
            { this.props.children }
          </div>
        </div>

        <div className={styles.output}>
          <div className={styles.fileName}>Props</div>
          <div className={styles.outputContent}>
            <table>
            	<thead>
            		<tr>
            			<th>Name</th>
            			<th>Type</th>
            			<th>Default</th>
            			<th>Description</th>
            		</tr>
            	</thead>
            	<tbody>
            	{
          		this.props.properties.map(property => (
            		<tr>
            			<td>{ property.name }</td>
            			<td>{ property.type }</td>
            			<td>{ property.default }</td>
            			<td>{ property.description }</td>
            		</tr>
            			))
        		}
            	</tbody>
            </table>
          </div>
        </div>

        {
          this.props.files.map(file => (
            <div key={file.name} className={styles.file}>
              <div className={styles.fileName}>{ file.name }</div>
              <pre className={styles.pre}>{ file.source }</pre>
            </div>
          ))
        }

      </div>
    );
  }

};
