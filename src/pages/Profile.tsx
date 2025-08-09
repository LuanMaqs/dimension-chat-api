import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Edit3, Save, User, Mail, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "MortySmith137",
    email: "morty@citadel.com",
    bio: "Just a regular teenager from dimension C-137. Please don't tell my parents about the interdimensional adventures...",
    dimension: "C-137",
    joinedDate: "2024-01-15",
    favoriteCharacter: "Rick Sanchez",
    messageCount: 1337,
    activeHours: "Evening",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const stats = [
    { label: "Messages Sent", value: profile.messageCount.toLocaleString(), icon: "💬" },
    { label: "Dimension", value: profile.dimension, icon: "🌌" },
    { label: "Favorite Character", value: profile.favoriteCharacter, icon: "👨‍🔬" },
    { label: "Most Active", value: profile.activeHours, icon: "⏰" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Profile Header */}
        <Card className="mb-6 bg-gradient-to-r from-card to-muted/30 border-space-purple/20">
          <CardHeader className="pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-portal-green/20">
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-morty-yellow to-portal-green text-background">
                    {profile.username[0]}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                >
                  <Camera size={14} />
                </Button>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-foreground">
                    {profile.username}
                  </h1>
                  <Badge variant="secondary" className="w-fit bg-portal-green/20 text-portal-green border-portal-green/30">
                    Active
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{profile.bio}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail size={14} />
                    {profile.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    Joined {new Date(profile.joinedDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    Dimension {profile.dimension}
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <Button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="bg-gradient-to-r from-space-purple to-dimension-blue hover:from-space-purple/80 hover:to-dimension-blue/80"
              >
                {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
                {isEditing ? "Save" : "Edit"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Profile Stats</CardTitle>
                <CardDescription>Your interdimensional activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{stat.icon}</span>
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="font-bold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Profile Information</CardTitle>
                <CardDescription>
                  {isEditing ? "Edit your profile details" : "Your personal information"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                  {isEditing ? (
                    <Input
                      id="username"
                      value={profile.username}
                      onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                      className="bg-background/50"
                    />
                  ) : (
                    <p className="text-foreground">{profile.username}</p>
                  )}
                </div>

                <Separator className="bg-border/50" />

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-background/50"
                    />
                  ) : (
                    <p className="text-foreground">{profile.email}</p>
                  )}
                </div>

                <Separator className="bg-border/50" />

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      className="bg-background/50 min-h-[100px]"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-foreground">{profile.bio}</p>
                  )}
                </div>

                <Separator className="bg-border/50" />

                {/* Dimension */}
                <div className="space-y-2">
                  <Label htmlFor="dimension" className="text-sm font-medium">Home Dimension</Label>
                  {isEditing ? (
                    <Input
                      id="dimension"
                      value={profile.dimension}
                      onChange={(e) => setProfile(prev => ({ ...prev, dimension: e.target.value }))}
                      className="bg-background/50"
                      placeholder="e.g., C-137"
                    />
                  ) : (
                    <p className="text-foreground">{profile.dimension}</p>
                  )}
                </div>

                <Separator className="bg-border/50" />

                {/* Favorite Character */}
                <div className="space-y-2">
                  <Label htmlFor="character" className="text-sm font-medium">Favorite Character</Label>
                  {isEditing ? (
                    <Input
                      id="character"
                      value={profile.favoriteCharacter}
                      onChange={(e) => setProfile(prev => ({ ...prev, favoriteCharacter: e.target.value }))}
                      className="bg-background/50"
                      placeholder="Who's your favorite?"
                    />
                  ) : (
                    <p className="text-foreground">{profile.favoriteCharacter}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;