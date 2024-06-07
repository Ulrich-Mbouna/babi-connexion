<template>
  <div>
    <div class="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender v-if="!header.isPlaceholder" :props="header.getContext()"
                          :render="header.column.columnDef.header"/>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
                      :data-state="row.getIsSelected() ? 'selected' : undefined"
            >
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender :props="cell.getContext()" :render="cell.column.columnDef.cell"/>
              </TableCell>
            </TableRow>
          </template>
          <template v-else>
            <TableRow>
              <TableCell :colspan="columns.length" class="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </div>
    <div class="uk-margin-small">
      <DataTablePagination :table="table" />
    </div>
  </div>
</template>

<script generic="TData, TValue" lang="ts" setup>
import type {ColumnDef, SortingState} from '@tanstack/vue-table'
import {FlexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useVueTable} from '@tanstack/vue-table'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {valueUpdater} from "~/lib/utils";
import DataTablePagination from "~/components/payments/DataTablePagination.vue";

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[],
  data: TData[]
}>()

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  state: {
    get sorting() {
      return sorting.value
    }
  }
})

const sorting = ref<SortingState>([])
</script>

<style lang="scss" scoped>

</style>
