import React, { CSSProperties, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/config'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { IconButton, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import ITruckList from 'src/Types/ITruckList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { addNewTruck, updateTruck } from 'src/store/actions/TruckAction'

function Trucks() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('')
  const [id, setId] = useState(0)
  const [licenseNumber, setLicenseNumber] = useState('')
  const [licenseType, setLicenseType] = useState('')
  const [truckType, setTruckType] = useState('')
  const [prodYear, setProdYear] = useState(0)
  const dispatch = useDispatch()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const trucks: Array<ITruckList> = useSelector(
    (state: RootState) => state.truck,
  )
  const columns: GridColDef[] = [
    { field: 'licenseNumber', headerName: 'License Number', width: 250 },
    { field: 'truckType', headerName: 'Truck Type', width: 250 },
    { field: 'plateType', headerName: 'Plate Type', width: 250 },
    {
      field: 'productionYear',
      headerName: 'Production Year',
      width: 250,
    },
    {
      field: 'id',
      headerName: 'Action',
      sortable: false,
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          color="inherit"
          title="Edit"
          onClick={() => {
            const currentTruck = trucks.find((x) => x.id === params.value)
            setId(currentTruck.id)
            setLicenseNumber(currentTruck.licenseNumber)
            setLicenseType(currentTruck.plateType)
            setTruckType(currentTruck.truckType)
            setProdYear(currentTruck.productionYear)
            setMode('Edit')
            handleOpen()
          }}
        >
          <ModeEditIcon />
        </IconButton>
      ),
    },
  ]
  const style: CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  }
  const saveUnit = () => {
    const data: ITruckList = {
      id: id,
      licenseNumber: licenseNumber,
      truckType: truckType,
      plateType: licenseType,
      productionYear: prodYear,
    }
    if (mode === 'Edit') {
      dispatch(updateTruck(data))
    } else {
      dispatch(addNewTruck(data))
    }
    handleClose()
    setId('')
    setLicenseNumber('')
    setLicenseType('')
    setTruckType('')
    setProdYear(0)
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleOpen()
          setMode('Add New')
        }}
        style={{width:100}}
      >
        Add Unit
      </Button>
      <br />
      <br />
      <div style={{ height: 800, width: '100%', zIndex: 1000 }}>
        <DataGrid
          rows={trucks}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input type="hidden" value={id} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {mode} Unit
            </Typography>
            <br />
            <TextField
              required
              id="outlined-required"
              label="License Number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              fullWidth
            />
            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Licence Type"
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
              fullWidth
            />
            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Truck Type"
              value={truckType}
              onChange={(e) => setTruckType(e.target.value)}
              fullWidth
            />
            <br />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Production Year"
              value={prodYear}
              onChange={(e) => setProdYear(e.target.value)}
              fullWidth
            />
            <br />
            <br />
            <Button variant="contained" onClick={saveUnit}>
              Save Unit
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Trucks
