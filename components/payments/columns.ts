import {ArrowUpDown, } from "lucide-vue-next";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import type {ColumnDef} from "@tanstack/vue-table";
import DropdownAction from './data-table-dropdown.vue'

export const columns: ColumnDef<Payment>[] = [
    {
        id: 'select',
        header: ({table}) => h(Checkbox, {
            'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
            'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
            'ariaLabel': 'Select all'
        }),
        cell: ({row}) => h(Checkbox, {
            'checked' : row.getIsSelected(),
            'onUpdate:checked': value => row.toggleSelected(!!value),
            'ariaLabel': 'Select row'
        }),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'image',
        header: 'Image',
        cell: ({row}) => h(Avatar, {
            'checked' : row.getIsSelected(),
            'onUpdate:checked': value => row.toggleSelected(!!value),
            'ariaLabel': 'Select row'
        }, h(AvatarImage, {
            src: row.getValue('image')
        })),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Nom', h(ArrowUpDown, { class: 'ml-2 size-4' })])
        },
        cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('name')),
    },
    {
        accessorKey: 'type',
        header: 'Type'
    },
    {
        accessorKey: "paiement_date",
        header: "Date de paiement",
        cell: ({ row }) => {
            const date = new Date(row.getValue('paiement_date'))

            // Format Date
            const formatted = new Intl.DateTimeFormat('fr-FR', {
                dateStyle: 'full'
            } ).format(date)

            return h('div', {}, formatted)
        },
    },
    {
        accessorKey: 'montant',
        header: ({ column }) => {
            return h(Button, {
                class: '-ml-3',
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Montant', h(ArrowUpDown, { class: 'ml-2 size-4' })])
        },
        cell: ({row}) => {
            const amount = Number.parseFloat(row.getValue('montant'));

            //Format the amount as a dollar
            const formatted = new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency:'XAF',
            }).format(amount)

            return h('div', {class : 'font-medium'}, formatted)
        }
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({row}) =>{
            const status = row.getValue('status');

            const Variant = {
                success: '',
                failed: 'destructive',
                processing: 'secondary',
                deactivate: 'destructive'
            }
            const Class = {
                success: 'bg-green-600 text-white',
                failed: 'destructive',
                processing: 'bg-blue-600 text-white',
                deactivate: 'destructive'
            }

            return h(Badge, { variant: Variant[status], class: Class[status] }, status)
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        header: () => h('div', {class: 'text-right'}, 'Actions'),
        cell: ({ row }) => {
            const payment = row.original

            return h('div', { class: 'relative text-right' }, h(DropdownAction, {
                payment,
            }))
        },
    },
]
