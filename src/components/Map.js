import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Row, Col, Card } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../style/Map.css"; // Custom CSS for the map container

// Fix the default marker icon issue with React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });

    const MapComponent = () => {
    return (
        <Container
        className="d-flex justify-content-center align-items-center"
        >
        <Row>
            <Col>
            <Card className="p-4 border-0">
                <Card.Body>
                <Card.Title
                    className="text-center mb-4"
                    style={{ fontWeight: "bold" }}
                >
                    Map
                </Card.Title>
                <MapContainer
                    center={[-6.2088, 106.8456]}
                    zoom={12}
                    scrollWheelZoom={false}
                    className="map-container"
                >
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[-6.2088, 106.8456]}>
                    <Popup>Jakarta, Indonesia</Popup>
                    </Marker>
                </MapContainer>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
};

export default MapComponent;
