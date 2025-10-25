import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";
import { LocationOn, Search } from "@mui/icons-material";

interface LocationPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (location: string) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  open,
  onClose,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const locations = [
    "Cairo, Egypt",
    "Alexandria, Egypt",
    "Giza, Egypt",
    "Luxor, Egypt",
    "Aswan, Egypt",
    "Sharm El Sheikh, Egypt",
    "Hurghada, Egypt",
    "Port Said, Egypt",
    "Suez, Egypt",
    "Ismailia, Egypt",
  ];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationSelect = (location: string) => {
    onSelect(location);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
        },
      }}
    >
      <DialogTitle sx={{ color: "#f7a600", fontWeight: "bold" }}>
        Select Location
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            placeholder="Search for a location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ color: "#666", mr: 1 }} />,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Box>

        <List>
          {filteredLocations.map((location, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleLocationSelect(location)}
              sx={{
                borderRadius: "8px",
                mb: 1,
                "&:hover": {
                  backgroundColor: "#f8f9fa",
                },
              }}
            >
              <ListItemIcon>
                <LocationOn sx={{ color: "#f7a600" }} />
              </ListItemIcon>
              <ListItemText
                primary={location}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              />
            </ListItem>
          ))}
        </List>

        {filteredLocations.length === 0 && (
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            sx={{ py: 2 }}
          >
            No locations found matching your search.
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} sx={{ color: "#666" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LocationPicker;
