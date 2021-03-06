USE [master]
GO
/****** Object:  Database [QueryDB]    Script Date: 12-Apr-19 11:40:04 AM ******/
CREATE DATABASE [QueryDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QueryDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\QueryDB.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'QueryDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\QueryDB_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [QueryDB] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QueryDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QueryDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QueryDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QueryDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QueryDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QueryDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [QueryDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [QueryDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QueryDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QueryDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QueryDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QueryDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QueryDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QueryDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QueryDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QueryDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [QueryDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QueryDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QueryDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QueryDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QueryDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QueryDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QueryDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QueryDB] SET RECOVERY FULL 
GO
ALTER DATABASE [QueryDB] SET  MULTI_USER 
GO
ALTER DATABASE [QueryDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QueryDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QueryDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QueryDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [QueryDB] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'QueryDB', N'ON'
GO
USE [QueryDB]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 12-Apr-19 11:40:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Email] [nvarchar](150) NOT NULL,
	[ContactNo] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](150) NOT NULL,
	[CommunityName] [nvarchar](150) NOT NULL,
	[Type] [smallint] NOT NULL,
	[ParentId] [int] NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Person]    Script Date: 12-Apr-19 11:40:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Person](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[Gender] [int] NULL,
	[MaritalStatus] [int] NULL,
	[Education] [int] NULL,
	[JobType] [int] NULL,
 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Relations]    Script Date: 12-Apr-19 11:40:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Relations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RelationType] [int] NULL,
	[FromPerson] [int] NULL,
	[ToPerson] [int] NULL,
 CONSTRAINT [PK_Relations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[User]    Script Date: 12-Apr-19 11:40:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (1, N'ajit', N'ajit@gmail.com', N'7048150951', N'ajit123', N'Patel', 1, NULL)
GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (3, N'Ajit', N'a@a.com', N'7048150951', N'ajit', N'patel', 2, 1)
GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (4, N'jimmy2', N'j2@j.com', N'7042150951', N'jimmy2', N'patel', 0, 1)
GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (5, N'jimmy3', N'j3@j.com', N'7042159951', N'jimmy2', N'patel', 0, 1)
GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (6, N'jimmy3', N'j3@j.com', N'7042159951', N'jimmy2', N'patel', 0, 1)
GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (11, N'Test', N'Test@test.com', N'Test', N'1LNWTPU2T5', N'TEst', 2, NULL)
GO
INSERT [dbo].[Customer] ([Id], [Name], [Email], [ContactNo], [Password], [CommunityName], [Type], [ParentId]) VALUES (12, N'Test1', N'test@test.in', N'21341', N'NX6Q2RH3ZK', N'asd', 2, NULL)
GO
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (1, N'Ajit@gmail.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (15, N'jimmy', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (16, N'jimmy', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (17, N'j4@j.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (18, N'j5@j.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (19, N'j5@j.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (20, N'j5@j.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (21, N'Test@test.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (22, N'test@test.in', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (23, N'Test@tst.com', N'test@123')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (24, N'jaimin@j.com', N'03NHYNRXX5')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (25, N'jaimin@j.com', N'03NHYNRXX5')
GO
INSERT [dbo].[User] ([Id], [Username], [Password]) VALUES (26, N'', N'WU9CB6HSFE')
GO
SET IDENTITY_INSERT [dbo].[User] OFF
GO
USE [master]
GO
ALTER DATABASE [QueryDB] SET  READ_WRITE 
GO
