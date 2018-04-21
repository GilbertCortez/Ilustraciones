<template>
<div>
  <h1>Transaction</h1>
  <div>
    <q-data-table
      :data="table"
      :columns="columns"
      :pagination.sync="paginationControl"
    >
      <!-- Custom renderer for "message" column -->
      <div slot="col-message" slot-scope="cell">
        <span class="light-paragraph">{{cell.data}}</span>
      </div>

      <!-- Custom renderer for "source" column -->
      <div slot="col-source" slot-scope="cell">
        <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
          Audit
          <q-tooltip>Some data</q-tooltip>
        </span>
        <span v-else class="label text-white bg-negative">{{cell.data}}</span>
      </div>

      <!-- Custom renderer for "action" column with button for custom action -->
      <div slot='col-action' slot-scope='cell'>
        <q-btn color="primary" @click='doSomethingMethod(cell.row.id)'>View</q-btn>
      </div>

      <!-- Custom renderer when user selected one or more rows -->
      <div slot="selection" slot-scope="selection">
        <q-btn color="primary" @click="changeMessage(selection)">
          <i>edit</i>
        </q-btn>
        <q-btn color="primary" @click="deleteRow(selection)">
          <i>delete</i>
        </q-btn>
      </div>
    </q-data-table>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      table: [
        {
          artwork: 'Painting',
          winner: 'Sean Cortez',
          hammer: '20,000php',
          doc: 'March 16, 2018'
        },
        {
          artwork: 'Sculpture',
          winner: 'Janelle Alag',
          hammer: '40,000php',
          doc: 'March 19, 2018'
        },
        {
          artwork: 'BNW Painting',
          winner: 'Justine Espin',
          hammer: '20,000php',
          doc: 'March 27, 2018'
        }
      ],
      columns: [
        {
          label: 'Artwork',
          filter: true,
          field: 'artwork'
        },
        {
          label: 'Winner',
          filter: true,
          field: 'winner'
        },
        {
          label: 'Hammer Price',
          filter: true,
          field: 'hammer'
        },
        {
          label: 'Date of Claim',
          filter: true,
          field: 'doc'
        }
      ]
    }
  }
}
</script>